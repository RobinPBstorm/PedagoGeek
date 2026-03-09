import { apply, chain, mergeWith, move, Rule, strings, template, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myFeature(_options: any): Rule {
    return chain([
    () => {
      const sourceTemplates = url('./files');
      const sourceParameterizedTemplates = apply(sourceTemplates, [
        template({
          ..._options,
          ...strings
        }),
        // à modifer pour la création de dossier depuis des paramètres
        move('src/app')
      ]);
      return mergeWith(sourceParameterizedTemplates);
    }
  ]);
}
