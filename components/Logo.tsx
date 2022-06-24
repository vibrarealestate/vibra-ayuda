import { memo } from 'react'
// import styled from 'styled-components';
import Link from 'next/link'
import { VibraIcon } from './Icons'

interface LogoAnchorProps {
  centered?: boolean
}

// const LogoAnchor = styled.a<LogoAnchorProps>`
//   text-decoration: none;
//   justify-self: ${(props) => (props.centered ? 'center' : 'start')};
//   -webkit-tap-highlight-color: transparent;
//   display: flex;
//   align-items: center;
//   &:focus {
//     outline: none !important;
//   }
//   svg {
//     fill: url(#logo_svg_painter);
//     stroke: url(#logo_svg_painter);
//   }
//   h1 {
//     font-family: 'Jost', 'Open Sans', sans-serif;
//     font-size: 3.6rem;
//     line-height: 1;
//     font-weight: 500;
//     margin: 0;
//     color: white;
//     background-image: linear-gradient(
//       180deg,
//       ${(props) => props.theme.colors.brandTop},
//       ${(props) => props.theme.colors.brandBottom}
//     );
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     @media (max-width: ${(props) => props.theme.breakpoints.xxs}px) {
//       font-size: 3rem;
//     }
//   }
//   &.white {
//     h1 {
//       background-image: linear-gradient(180deg, white, white);
//       margin-left: 0.5rem;
//     }
//     svg {
//       fill: white;
//       stroke: white;
//     }
//   }
// `;

interface LogoProps {
  centered?: boolean
  isWhite?: boolean
  withLetters?: boolean
  size?: number
}

function Logo({
  centered = false,
  isWhite = false,
  withLetters = false,
  size,
}: LogoProps) {
  return (
    <>
      <svg
        key="logo_svg_painter"
        width="0"
        height="0"
        style={{ position: 'fixed', bottom: 0 }}
      >
        <linearGradient id="logo_svg_painter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#0140ff" offset="0%" />
          <stop stopColor="#fb1ffe" offset="100%" />
        </linearGradient>
      </svg>
      <Link href="/" passHref>
        <a
          // centered={centered}
          className={`logo${
            isWhite ? ' white' : ''
          } no-underline flex items-center`}
          aria-label="Logo Vibra"
          title="Logo Vibra"
        >
          <VibraIcon size={size} />
          {withLetters && <h1 className="m-0 font-['Jost']">Vibra</h1>}
        </a>
      </Link>
    </>
  )
}

export default memo(Logo)
