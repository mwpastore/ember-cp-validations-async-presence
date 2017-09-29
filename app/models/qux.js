import DS from 'ember-data';

import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),

  foos: [
    validator('has-many'),
    validator('length', {
      min: 1
    })
  ]
});

export default DS.Model.extend(Validations, {
  name: DS.attr('string'),

  foos: DS.hasMany()
});
