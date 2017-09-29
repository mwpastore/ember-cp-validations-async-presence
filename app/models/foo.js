import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  qux: [
    validator('belongs-to'),
    validator('presence', true)
  ],
  bars: [
    validator('has-many'),
    validator('length', {
      min: 1
    })
  ]
});

export default DS.Model.extend(Validations, {
  qux: DS.belongsTo(),
  bars: DS.hasMany()
});
