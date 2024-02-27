import React, { ReactNode } from 'react';

interface RichTextProps {
  children?: ReactNode;
  paddingBottom?: string;
  paddingTop?: string;
}

const RichText: React.FC<RichTextProps> = ({ children, paddingTop, paddingBottom }) => {

  const paddingTopClass = paddingTop ? `padding-top-${paddingTop}` : 'padding-top-0';
  const paddingBottomClass = paddingBottom ? `padding-bottom-${paddingBottom}` : 'padding-bottom-0';

  return (
    <div className={`rich-text ${paddingTopClass} ${paddingBottomClass}`}>
      {children}
    </div>
  );
};

export default RichText;
