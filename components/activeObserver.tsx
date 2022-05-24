import React, { useState, useEffect, useRef } from 'react';

export function activeObserver() {
  new IntersectionObserver(
    (entries) => {

    },
    { rootMargin: '0% 0% -80% 0%' }
  );
}