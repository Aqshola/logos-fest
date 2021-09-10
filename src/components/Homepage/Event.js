import React from 'react'
import { Container, Grid } from '../Common'
import CardEvent from './Common/CardEvent'
import HeadSection from './Common/HeadSection'

const Event = () => {
  const listEvent = [
    {
      img: '/icon/justice-bootcamp.svg',
      title: 'Justice Bootcamp',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu id orci lorem a nisl. Vestibulum, facilisis facilisis fermentum et maecenas volutpat. Turpis laoreet sed aliquam congue',
      link: '/justice/bootcamp',
    },
    {
      img: '/icon/justice-talks.svg',
      title: 'Justice Talks',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu id orci lorem a nisl. Vestibulum, facilisis facilisis fermentum et maecenas volutpat. Turpis laoreet sed aliquam congue',
      link: '/justice/talks',
    },
  ]
  return (
    <section id="event-product" className="pt-5 w-full">
      <Container>
        <Grid className="px-4 lg:px-0">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <HeadSection
              title="Our Event Product"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras ipsum dolor sit amet, consectetur "
            />
          </div>
          {listEvent.map((item, index) => (
            <div className="col-span-12 lg:col-span-6" key={index}>
              <CardEvent
                imgSrc={item.img}
                imgAlt={item.title}
                title={item.title}
                subtitle={item.desc}
                url={item.link}
              />
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Event
