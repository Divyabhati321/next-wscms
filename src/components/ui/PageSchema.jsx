'use server'
import React from 'react'

const PageSchema = async ({metaSchema}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: metaSchema }} />       
  )
}

export default PageSchema