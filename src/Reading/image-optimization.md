## Image Component and Image Optimization

- The Next.js Image component, next/image, is an extension of the HTML <img> element
- **Improved Performance**: Correctly sized image for each device
- **Visual Stability**: Prevent Cumulative Layout Shift automatically
- **Faster Page Loads**: Images are only loaded when they enter the viewport
- **Asset Flexibility**: On-demand image resizing

### Using the Image Component

```
  import Image from 'next/image'
  // or
  import Image from 'next/future/image' if you need a component much closer to the native <img> element
  you can define the src for your image
```

### Local Images

- To use a local image, `import` your `.jpg`, `.png`, or .`webp` files:

```
  import profilePic from '../public/me.png'
```

### Remote Images

```
import Image from "next/image";
const Img: React.FC = () => {
  return (
    <>
      <Image
        src="/../public/chocolate-tarts-cake.jpg"
        alt="Picture of chocolate-tarts-cake"
        width={500}
        height={500}
      />
      <p>Welcome to my Image page!</p>
    </>
  );
}

export default Img;
```

### Priority

- Next.js to specially prioritize the image for loading
- You can add the property like this:

```
import Image from "next/image";
const Img: React.FC = () => {
  return (
    <>
      <Image
        src="/../public/chocolate-tarts-cake.jpg"
        alt="Picture of chocolate-tarts-cake"
        width={500}
        height={500}
        priority
      />
      <p>Welcome to my Image page!</p>
    </>
  );
}

export default Img;
```
