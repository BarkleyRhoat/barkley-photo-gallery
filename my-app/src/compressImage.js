
const DEFAULTS = {
	maxDimension: 1200, // longest edge, in pixels
	quality: 0.8, // 0-1, JPEG encoder quality
	outputType: "image/jpeg",
};

export function compressImage(file, options = {}) {
	const { maxDimension, quality, outputType } = { ...DEFAULTS, ...options };

	return new Promise((resolve, reject) => {
		if (!file || !file.type.startsWith("image/")) {
			reject(new Error("Provided file is not an image"));
			return;
		}

		const objectUrl = URL.createObjectURL(file);
		const img = new Image();

		img.onload = () => {
			URL.revokeObjectURL(objectUrl);

			const scale = Math.min(1, maxDimension / Math.max(img.width, img.height));
			const width = Math.round(img.width * scale);
			const height = Math.round(img.height * scale);

			const canvas = document.createElement("canvas");
			canvas.width = width;
			canvas.height = height;

			const ctx = canvas.getContext("2d");
			// Fill white first so transparent PNGs don't turn black when
			// flattened into an (opaque) JPEG.
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, width, height);
			ctx.drawImage(img, 0, 0, width, height);

			resolve(canvas.toDataURL(outputType, quality));
		};

		img.onerror = () => {
			URL.revokeObjectURL(objectUrl);
			reject(new Error("Could not load the selected image"));
		};

		img.src = objectUrl;
	});
}
