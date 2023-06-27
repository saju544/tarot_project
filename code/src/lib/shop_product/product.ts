import { writable } from 'svelte/store'
import agate from '../../assets/image/agate.jpg'
import amethyst from '../../assets/image/amethyst.jpg'
import blackTurmaline from '../../assets/image/black_turmaline.jpg'
import blueLaxeAgate from '../../assets/image/blue_lace_agate.jpg'
import carnellian from '../../assets/image/carnelian.jpg'
import citiune from '../../assets/image/carnelian.jpg'
import citrine_bracelet from '../../assets/image/citrine bracelet.jpg'
import clearQuartz from '../../assets/image/clear quartz.jpg'
import greenAventurine from '../../assets/image/green_aventurine.jpg'
import hematiteBracelet from '../../assets/image/hematite_bracelet.jpg'
import lapisLazuliBracelet from '../../assets/image/lapis_lazuli_bracelet.jpg'
import lightBrownTigersEye from '../../assets/image/light_brown_tigers_eye.jpg'

export const products = writable([
  {
    name: 'AGATE',
    category: 'Gemstone',
    description:
      'Agate is a popular semiprecious chalcedony type that is found in bands of variable colour and transparency. Since quartz is essentially what agate is, its physical characteristics are often those of that crystal.',
    image: agate
  },
  {
    name: 'AMETHYST',
    category: 'Gemstone',
    description:
      'The purple form of the quartz mineral family is known as amethyst. Despite the fact that there are other purple gems like sapphire and tanzanite, it is the gem that is most frequently linked with the colour purple. Its purple hue can be either chilly and bluish in tone or reddish purple, sometimes known as “raspberry.”',
    image: amethyst
  },
  {
    name: 'BLACK TURMALINE',
    category: 'Gemstone',
    description:
      'Black Tourmaline Bracelet protects from the evil eye & Tantrik attacks, increases virtues, kills negativity, fetches positivity, opens the aura, brings good luck, lessens mood swings, prevents allergies, promotes health, and helps dealing with day-to-day.',
    image: blackTurmaline
  },
  {
    name: 'CARNELIAN',
    category: 'Gemstone',
    description:
      'The silica mineral chalcedony known as carnelian, sometimes known as cornelian, is a translucent, semiprecious variation that owes its red to reddish brown hue to hematite that has been disseminated in a colloidal form (iron oxide). It is very related to sard, with just the colour of the red varying',
    image: carnellian
  },
  {
    name: 'CITIUNE',
    category: 'Gemstone',
    description:
      'Quartz, a silica mineral, comes in the translucent, coarse-grained variation called citrine (q.v.). Citrine is a semiprecious gem appreciated for its similarity to the more expensive topaz and its yellow to brownish colour. Citrine’s colour is caused by hydrous iron oxide contained in colloidal suspension. In contrast to amethyst or smokey quartz, both of which are frequently heated to change their natural colours into those of citrine, natural citrine is extremely rare. To drive up the price of citrine, it is frequently sold under several names that make topaz look similar. It can be recognised from topaz by its lower hardness and from amethyst that has lost its colour by not having a reddish hue. Amethyst is most commonly found in the following places: Brazil, Uruguay, the Urals, Scotland, and North Carolina. It has quartz-like physical characteristics',
    image: citiune
  },
  {
    name: 'CITRINE BRACELET',
    category: 'Bracelet',
    description:
      'Citrine attracts wealth, prosperity and success. It imparts joy, wonder, delight and enthusiasm. Raises self-esteem and self-confidence. Stimulates the brain, strengthening the intellect.',
    image: citiune
  },
  {
    name: 'CLEAR QUARTZ',
    category: 'Gemstone',
    description:
      'The mineral known as clear quartz, often referred to as crystal quartz, is composed of silicon and oxygen atoms. It has a vitreous lustre and is a component of the trigonal crystal structure. As implied by the name, Clear Quartz is transparent and ranges in colour from clear to white. It is also known as Rock Crystal. Spiritual development and healing are the meanings of clear quartz.',
    image: clearQuartz
  },
  {
    name: 'GREEN AVENTURINE-7 CHAKRA',
    category: 'Bracelet',
    description: `Green Aventurine is a semi-precious stone known for its comforting and heart-healing properties. This beautiful bracelet is made of green aventurine, seven chakra stones,

    The seven chakra stones help the bearer manifest positive thoughts, help meet life goals, heals the bearer from within, and always protect from evil energies.`,
    image: greenAventurine
  },
  {
    name: 'HEMATITE BRACELET',
    category: 'Bracelet',
    description:
      'Golden Hematite Bracelet, balances the earth element, brings stability, energizes life, charms the luck, helps achieve big goals, gives charming personality, makes your stand firm, and gives a rich life.',
    image: hematiteBracelet
  },
  {
    name: 'Lapis lazuli bracelet',
    category: 'Bracelet',
    description: `Lapis lazuli has a lot of medical benefits. It boosts immune system, lowers blood pressure, purifies blood and soothes inflammation, if any, in the body. It is also said to alleviate insomnia, depression, throat and thyroid related problems. It benefits the nervous system and respiratory system.`,
    image: lapisLazuliBracelet
  },
  {
    name: 'LIGHT BROWN TIGER’S EYE',
    category: 'Bracelet',
    description: `Light Brown Tiger’s Eye can help us resolve problems by focusing our minds.
    It has the power to focus your mind and help you resolve problems without being clouded by emotions.
    Tiger’s Eye is a stone that brings good luck to the wearer.`,
    image: lightBrownTigersEye
  }
])
