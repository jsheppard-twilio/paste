/**!
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from 'react-uid';

export interface TwilioOrgImpactAccessIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const TwilioOrgImpactAccessIcon = React.memo(
  ({
    title = 'Twilio Org Impact Access Icon',
    decorative = true,
    className,
    color,
    size,
  }: TwilioOrgImpactAccessIconProps) => {
    const uid = useUID();
    return (
      <span style={{color, width: size, height: size, display: 'inline-block'}} className={className}>
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 32 32">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M31.5 3.6c-.3-.4-.7-.6-1.2-.6H13.7c-.9 0-1.6.6-1.9 1.4L10.9 7H6.7c-.8 0-1.6.6-1.9 1.4L.3 22c-.1.5-.1 1 .2 1.4.3.4.7.6 1.2.6h8.6c.9 0 1.6-.6 1.9-1.4l.9-2.6H19l3.5 3.5c.4.4.9.6 1.4.6h.5c.7-.2 1.2-.7 1.5-1.3L31.7 5c.2-.5.1-1-.2-1.4zM2.4 22L6.7 9h3.5L7 18.7c-.1.3-.1.6.1.9l.1.1L9.6 22H2.4zm21.5.1l-3.8-3.8c-.2-.2-.4-.3-.7-.3h-10l4.3-13h15.9l-5.7 17.1z"
          />
          <path
            fill="currentColor"
            d="M18.7 14.6c.3.3.9.3 1.2 0l3.1-3c.7-.7.7-1.8 0-2.4-.1-.2-.1-.2-.2-.3-.7-.5-1.7-.4-2.3.2l-1.2 1.1L18.2 9c-.6-.6-1.6-.7-2.3-.2-.8.5-1 1.6-.4 2.4.1.1.1.2.2.2l3 3.2z"
          />
        </svg>
      </span>
    );
  }
);

TwilioOrgImpactAccessIcon.displayName = 'TwilioOrgImpactAccessIcon';
export {TwilioOrgImpactAccessIcon};
