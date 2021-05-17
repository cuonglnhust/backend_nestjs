// created from 'create-ts-index'

import apiConfig from './api';
import dbConfig from './database';
import jwtConfig from './jwt';
import crypto from './crypto';

export const configs = [apiConfig, dbConfig, jwtConfig, crypto];

export default {
  apiConfig,
  dbConfig,
  jwtConfig,
  crypto,
};
