import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),

  foo: [
    validator('belongs-to'),
    validator('presence', true)
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr('string'),

  foo: DS.belongsTo()
});
