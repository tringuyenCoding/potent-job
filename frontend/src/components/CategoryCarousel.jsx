/* eslint-disable react/jsx-key */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import Button from './ui/button'

const category = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Computing",
  "Cyber Security",
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent >
          {
            category.map((cat, index) => (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                <Button variant="outline" className="rounded-full">
                  {cat}
                </Button>
              </CarouselItem>

            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CategoryCarousel