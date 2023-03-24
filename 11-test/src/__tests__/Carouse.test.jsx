import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Carousel from "../components/Carousel";

test("click thumbnails to make them hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const carousel = render(<Carousel images={images} />);
  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const thumb = await carousel.findByTestId(`thumbnail${i}`);
    await thumb.click();
    expect(hero.src).toContain(image);
    expect(Array.from(thumb.classList)).toContain("active");
    for (let j = 0; j < images.length; j++) {
      if (j !== i) {
        const thumbnail = await carousel.findByTestId(`thumbnail${j}`);
        !expect(Array.from(thumbnail.classList)).not.toContain("active");
      }
    }
  }
});
