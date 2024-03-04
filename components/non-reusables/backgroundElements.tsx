import BackgroundElement from "../reusables/backgroundElement";

function BackgroundElements() {
  return (
    <>
      <BackgroundElement
        src="/bg-elements/line1.svg"
        bottom="5rem"
        right={0}
        opacity={0.6}
        width="40rem"
      />
      <BackgroundElement
        src="/bg-elements/line2.svg"
        bottom="5rem"
        width="30rem"
        left={0}
      />
      <BackgroundElement
        src="/bg-elements/line3.svg"
        top="5rem"
        width="25rem"
        opacity={0.6}
        left={0}
      />
    </>
  );
}

export default BackgroundElements;
