/**
 *
 * Content
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  content: string;
}

export function Content({ content }: Props) {
  return (
    <Typography
      className="blog-content"
      component="section"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
