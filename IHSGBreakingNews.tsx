import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const IHSGBreakingNews: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{backgroundColor: '#e74c3c', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif'}}>
      <div style={{opacity, transform: `scale(${scale})`, textAlign: 'center'}}>
        <h1 style={{fontSize: 100, margin: 0}}>BREAKING NEWS</h1>
        <h2 style={{fontSize: 60, margin: '20px 0'}}>IHSG ANJLOK!</h2>
        <p style={{fontSize: 30}}>Pasar saham ditutup melemah signifikan hari ini.</p>
      </div>
    </AbsoluteFill>
  );
};
