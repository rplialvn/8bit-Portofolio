import React from 'react';

export function PixelAvatar({ className = 'w-40 h-40' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      aria-label="8-bit Software Developer Avatar"
    >
      {/* Hair & Red Cap */}
      <rect x="4" y="1" width="8" height="2" fill="#" />
      <rect x="3" y="2" width="11" height="1" fill="#E40058" />
      <rect x="5" y="1" width="2" height="1" fill="#FFFFFF" />
      {/* Hair sides */}
      <rect x="3" y="3" width="2" height="3" fill="#4A2511" />
      <rect x="11" y="3" width="1" height="2" fill="#4A2511" />
      {/* Skin Face */}
      <rect x="5" y="3" width="6" height="5" fill="#FCA044" />
      <rect x="4" y="4" width="1" height="3" fill="#FCA044" />
      <rect x="11" y="5" width="1" height="2" fill="#FCA044" />
      {/* Pixel Glasses */}
      <rect x="4" y="4" width="8" height="1" fill="#181425" />
      <rect x="5" y="5" width="2" height="2" fill="#181425" />
      <rect x="9" y="5" width="2" height="2" fill="#181425" />
      <rect x="6" y="5" width="1" height="1" fill="#FFFFFF" />
      <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />
      {/* Smile */}
      <rect x="7" y="7" width="2" height="1" fill="#181425" />
      {/* Headphones */}
      <rect x="2" y="4" width="1" height="3" fill="#00A800" />
      <rect x="12" y="4" width="1" height="3" fill="#00A800" />
      {/* Hoodie / Tunic */}
      <rect x="4" y="8" width="8" height="4" fill="#2038EC" />
      <rect x="3" y="9" width="1" height="3" fill="#2038EC" />
      <rect x="12" y="9" width="1" height="3" fill="#2038EC" />
      {/* Hoodie Accent / Gold Badge */}
      <rect x="7" y="9" width="2" height="2" fill="#E40058" />
      {/* Hands */}
      <rect x="3" y="12" width="1" height="1" fill="#FCA044" />
      <rect x="12" y="12" width="1" height="1" fill="#FCA044" />
      {/* Pants */}
      <rect x="5" y="12" width="6" height="2" fill="#181425" />
      <rect x="5" y="14" width="2" height="1" fill="#181425" />
      <rect x="9" y="14" width="2" height="1" fill="#181425" />
      {/* Shoes */}
      <rect x="4" y="15" width="3" height="1" fill="#E40058" />
      <rect x="9" y="15" width="3" height="1" fill="#E40058" />
    </svg>
  );
}

export function PixelHeart({ filled = true, className = 'w-6 h-6' }: { filled?: boolean; className?: string }) {
  const main = filled ? '#E40058' : '#5A5368';
  const shine = filled ? '#FF9BB8' : '#7D758D';
  return (
    <svg viewBox="0 0 11 10" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <path
        d="M2 0h2v1h1v1h1V1h1V0h2v1h1v1h1v3h-1v1H9v1H8v1H7v1H6v1H5V9H4V8H3V7H2V6H1V5H0V2h1V1h1V0z"
        fill="#181425"
      />
      <path
        d="M2 1h2v1h1v1h1V2h1V1h2v1h1v3H9v1H8v1H7v1H6v1H5V8H4V7H3V6H2V5H1V2h1V1z"
        fill={main}
      />
      <rect x="2" y="2" width="1" height="1" fill={shine} />
    </svg>
  );
}

export function PixelCoin({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="3" y="0" width="4" height="12" fill="#181425" />
      <rect x="2" y="1" width="6" height="10" fill="#181425" />
      <rect x="1" y="2" width="8" height="8" fill="#181425" />
      <rect x="3" y="1" width="4" height="10" fill="#FCD856" />
      <rect x="2" y="2" width="6" height="8" fill="#FCD856" />
      <rect x="4" y="3" width="1" height="6" fill="#FFF7B2" />
      <rect x="5" y="3" width="1" height="6" fill="#C84C0C" />
    </svg>
  );
}

export function PixelCloud({ className = 'w-32 h-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="6" y="1" width="6" height="1" fill="#181425" />
      <rect x="13" y="2" width="5" height="1" fill="#181425" />
      <rect x="4" y="2" width="2" height="2" fill="#181425" />
      <rect x="12" y="2" width="1" height="1" fill="#181425" />
      <rect x="18" y="3" width="3" height="2" fill="#181425" />
      <rect x="2" y="4" width="2" height="2" fill="#181425" />
      <rect x="1" y="6" width="1" height="3" fill="#181425" />
      <rect x="21" y="5" width="2" height="4" fill="#181425" />
      <rect x="2" y="9" width="20" height="1" fill="#181425" />
      {/* Cloud body */}
      <rect x="6" y="2" width="6" height="7" fill="#FFFFFF" />
      <rect x="4" y="4" width="15" height="5" fill="#FFFFFF" />
      <rect x="13" y="3" width="5" height="6" fill="#FFFFFF" />
      <rect x="2" y="6" width="19" height="3" fill="#FFFFFF" />
      {/* Cloud shading */}
      <rect x="3" y="8" width="18" height="1" fill="#D0E4FF" />
    </svg>
  );
}

export function PixelQuestionBlock({
  onClick,
  hitCount = 0,
}: {
  onClick?: () => void;
  hitCount?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Click me for bonus coins!"
      className="group relative cursor-pointer select-none active:-translate-y-1.5 transition-transform duration-75"
    >
      <svg viewBox="0 0 16 16" className="w-12 h-12" shapeRendering="crispEdges">
        <rect x="0" y="0" width="16" height="16" fill="#181425" />
        <rect x="1" y="1" width="14" height="14" fill="#FC9838" />
        <rect x="1" y="1" width="13" height="1" fill="#FCD856" />
        <rect x="1" y="1" width="1" height="13" fill="#FCD856" />
        <rect x="14" y="2" width="1" height="13" fill="#C84C0C" />
        <rect x="2" y="14" width="13" height="1" fill="#C84C0C" />
        {/* Corner rivets */}
        <rect x="2" y="2" width="1" height="1" fill="#181425" />
        <rect x="13" y="2" width="1" height="1" fill="#181425" />
        <rect x="2" y="13" width="1" height="1" fill="#181425" />
        <rect x="13" y="13" width="1" height="1" fill="#181425" />
        {/* Question mark */}
        <rect x="5" y="4" width="5" height="2" fill="#181425" />
        <rect x="9" y="6" width="2" height="2" fill="#181425" />
        <rect x="7" y="8" width="3" height="2" fill="#181425" />
        <rect x="7" y="11" width="2" height="2" fill="#181425" />
        <rect x="5" y="3" width="5" height="2" fill="#FFFDF5" />
        <rect x="9" y="5" width="2" height="2" fill="#FFFDF5" />
        <rect x="7" y="7" width="3" height="2" fill="#FFFDF5" />
        <rect x="7" y="10" width="2" height="2" fill="#FFFDF5" />
      </svg>
      {hitCount > 0 && (
        <span className="font-pixel text-[9px] absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FCD856] text-[#181425] px-1.5 py-0.5 border-2 border-[#181425] whitespace-nowrap">
          +{hitCount} XP
        </span>
      )}
    </button>
  );
}

export function PixelSwordIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="9" y="1" width="2" height="2" fill="#181425" />
      <rect x="7" y="3" width="2" height="2" fill="#181425" />
      <rect x="5" y="5" width="2" height="2" fill="#181425" />
      <rect x="8" y="2" width="2" height="2" fill="#D0E4FF" />
      <rect x="6" y="4" width="2" height="2" fill="#D0E4FF" />
      <rect x="4" y="6" width="2" height="2" fill="#9BB5E8" />
      <rect x="2" y="6" width="2" height="1" fill="#FCD856" />
      <rect x="5" y="9" width="1" height="2" fill="#FCD856" />
      <rect x="3" y="7" width="2" height="2" fill="#FC9838" />
      <rect x="1" y="9" width="2" height="2" fill="#7D2C04" />
    </svg>
  );
}

export function PixelScrollIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="2" y="1" width="8" height="10" fill="#181425" />
      <rect x="3" y="2" width="6" height="8" fill="#FFF3C4" />
      <rect x="2" y="2" width="8" height="1" fill="#FC9838" />
      <rect x="2" y="9" width="8" height="1" fill="#FC9838" />
      <rect x="4" y="4" width="4" height="1" fill="#181425" />
      <rect x="4" y="6" width="4" height="1" fill="#181425" />
      <rect x="4" y="8" width="3" height="1" fill="#181425" />
    </svg>
  );
}

export function PixelChestIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="1" y="2" width="10" height="8" fill="#181425" />
      <rect x="2" y="3" width="8" height="3" fill="#C84C0C" />
      <rect x="2" y="7" width="8" height="2" fill="#9B3706" />
      <rect x="2" y="6" width="8" height="1" fill="#181425" />
      <rect x="5" y="5" width="2" height="3" fill="#FCD856" />
    </svg>
  );
}

export function PixelPipe({ className = 'w-16 h-20' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 20" className={className} shapeRendering="crispEdges" aria-hidden="true">
      <rect x="0" y="0" width="16" height="7" fill="#181425" />
      <rect x="1" y="1" width="14" height="5" fill="#00A800" />
      <rect x="2" y="1" width="3" height="5" fill="#80D010" />
      <rect x="12" y="1" width="2" height="5" fill="#006800" />
      <rect x="2" y="7" width="12" height="13" fill="#181425" />
      <rect x="3" y="7" width="10" height="13" fill="#00A800" />
      <rect x="4" y="7" width="3" height="13" fill="#80D010" />
      <rect x="11" y="7" width="2" height="13" fill="#006800" />
    </svg>
  );
}
