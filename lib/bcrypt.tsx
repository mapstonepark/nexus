const bcrypt = require('bcrypt')

import React from 'react'

export default function hashPass(unHashPass: string) {
  return bcrypt.hash(unHashPass, 10).then(function(hash: string){
    return hash;
  });
}

