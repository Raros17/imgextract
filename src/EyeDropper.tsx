import React, { useRef, useEffect } from 'react';

interface EyeDropperProps {
  imageUrl: string;
  onColorPick: (color: string) => void;
  isActive: boolean;
}

  const EyeDropper: React.FC<EyeDropperProps> = ({ imageUrl, onColorPick, isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const image = imageRef.current;

    if (canvas && ctx && image) {
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
      };
    }
  }, [imageUrl]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isActive) return; 

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pixelData = ctx.getImageData(x, y, 1, 1).data;
      const rgb = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
      onColorPick(rgb);
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{ cursor: isActive ? 'crosshair' : 'default', display: 'none' }}
      />
      <img ref={imageRef} src={imageUrl} alt="Selected" style={{ display: 'none' }} />
    </div>
  );
};

export default EyeDropper;
