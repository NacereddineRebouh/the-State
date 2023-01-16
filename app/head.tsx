import image from "../public/Images/og/og_image.png";
export default function Head() {
  return (
    <>
      <title>
        theState: Your first and last stop for all real estate information in
        the area
      </title>
      <meta
        property="og:title"
        content="theState: Your One-Stop Shop for all Real Estate Needs in the Region"
      />
      <meta
        property="og:description"
        content="We offer expert guidance on all aspects of your transaction so that you can feel secure in your decision and confident in our work."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dttrs30gt/image/upload/v1673856350/theState/og_image_jhokdu.png"
      />
      <meta property="og:url" content="https://the-state.vercel.app" />
      <meta property="og:type" content="website" />

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
