import React from 'react'

type copyrightProps = { copyright : string }

const Copyright = ({copyright} : copyrightProps) => (
  <div className="site__copyright">
    { copyright }
  </div>
)

export default Copyright