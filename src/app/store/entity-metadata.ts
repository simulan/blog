import { EntityMetadataMap } from 'ngrx-data';

const entityMetadata: EntityMetadataMap = {
  Article: {},
  Post: {}
};

const pluralNames = {};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
