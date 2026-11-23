// Lightweight Web Audio API 8-bit square-wave sound effects (no external audio files needed)

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      audioCtx = new AudioCtx();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playCoinSfx(enabled: boolean) {
  if (!enabled) return;
  const ctx = getCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(987.77, now); // B5
  osc.frequency.setValueAtTime(1318.51, now + 0.075); // E6

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.33);
}

export function playBlipSfx(enabled: boolean) {
  if (!enabled) return;
  const ctx = getCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.setValueAtTime(680, now + 0.04);

  gain.gain.setValueAtTime(0.05, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.1);
}

export function playPowerUpSfx(enabled: boolean) {
  if (!enabled) return;
  const ctx = getCtx();
  if (!ctx) return;

  const notes = [330, 392, 659, 523, 587, 784];
  const now = ctx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, now + idx * 0.055);

    gain.gain.setValueAtTime(0.06, now + idx * 0.055);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.055 + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + idx * 0.055);
    osc.stop(now + idx * 0.055 + 0.055);
  });
}
