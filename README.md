# PedagoGeek

Accessible sur la page github: https://robinpbstorm.github.io/PedagoGeek/


## Deployement automatique

Le contenu de la page github correspond aux déploiement du dernier commit sur la branche "main".

Vous pouvez avoir les première étapes ici: https://angular.dev/tools/cli/deployment

    - ng add angular-cli-ghpages
    - ajouter cette option dans angular.json:

        ```
        "outputPath": "dist/nom-du-projet",
        ```

Préparer ensuite un pipeline github pour déployer sur un push sur la branche "main"

    - Créer un dossier /.github/workflows/
    - Ajouter un fichier .yml qui contiendra le pipeline

## Ajout d'un schematics personnalisé

 1. installer @angular-devkit/schematics-cli

```bash
npm install --save-dev @angular-devkit/schematics-cli
```

 2. préparer un dossier pour votre schématics `tools/schematics`

 3. Générer un squelette de schematics

 ``` bash
 npx schematics blank my-feature --name-only
 ```

 4. Remplir les templates

 créer un dossier `/files` dans `tools/schematics/src/my-feature/`

 Dans ce dossier, on placera les fichiers à générer.

 On pourra disposer des "balises" pour passage de paramètre.

 ```ts
// Exemple lié à un nom donné pendant la commande comme étant le paramètre `name`:
<%= classify(name) %> // le nom en lowerCamelCase pour les classes par exemple
<%= dasherize(name) %> // le nom en dash-case (aussi appelé kebab-case) pour les noms de fichiers
 ```

 Et avec un fichiers `schema.json` dans `tools/schematics/src/my-feature/`, on va pouvoir définir les variables.

 5. Remplir collection.json 

 6. Adapter index.ts de notre schematics:

 ```ts
 export function myFeature(_options: any): Rule { // au moins une régle dois être défini
    return chain([
    () => {
      const sourceTemplates = url('./files'); // va recherché les fichiers de template
      const sourceParameterizedTemplates = apply(sourceTemplates, [ // applique les paramètres
        template({
          ..._options,
          ...strings
        }),
        // à modifer pour la création de dossier depuis des paramètres
        move('src/app') // place les nouveaux fichiers créés ici
      ]);
      return mergeWith(sourceParameterizedTemplates);
    }
  ]);
}
 ```

 7. Compiler

```bash
 npx tsc -p tsconfig.json
 ```

 8. générer notre schematics:

 ```bash
    ng generate ./tools/schematics:my-feature test
 ```

 Pour ne pas être obliger d'indiquer le chemin de la collection.json de nos schematics personnalisés, nous allons devoir modifier notre angular.json:

 ```json
   "cli": {
    "schematicCollections": [ // définit les collection.json des schematiques de notre projet
      "@schematics/angular", // celui de base
      "./tools/schematics"  // le notre
    ]
  },
 ```

## Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
