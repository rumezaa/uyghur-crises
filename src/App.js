import Info from "./Info";
import { useState } from "react";
import Bg from "./bg.png";

function App() {
  const [isHidden, setHidden] = useState(null);
  const showInfo = (info) => {
    setHidden(info);
  };

  const onLeave = () => {
    setHidden(null);
  };

  const Source = ({ last, first, date, title, publisher, source, access }) => {
    return (
      <h2>
        {(last && first && `${last}, ${first}`) || (last && last) || "N. D"}. (
        {date || "n.d"}). <span className="italic">{title}</span>. {publisher}.
        Retrieved {access}, from{" "}
        <span>
          <a className="text-blue-400 underline" href={source}>
            {source}
          </a>
        </span>
      </h2>
    );
  };

  return (
    <div className="App">
      <div
        className="w-screen h-screen  bg-cover flex flex-col items-center justify-center gap-5"
        style={{ backgroundImage: `url('${Bg}')` }}
      >
        <h2 className="text-white font-black text-6xl">Case Study: Uyghurs</h2>
        <h2 className="text-white font-light text-3xl">The Loud Silence</h2>
        <h2 className="text-white font-light text-2xl">By Rumeza Fatima</h2>
      </div>

      <Info
        description={
          <div className="flex flex-col gap-3 font-xl">
            <h2>
              The Uyghur Muslims have a long and complex history, which has had
              a significant impact on their sense of nationalism. The Uyghur
              people have been living in the Xinjiang region of China for over
              2,000 years, first gaining proximity in the 8th century, when they
              developed a kingdom in North Central Mongolia. Having experienced
              various periods of independence and foreign rule from nations such
              as the Kyrgyz and Mongols, The Uyghurs' history of political
              autonomy has shaped their sense of nationalism, and their desire
              for self-rule has remained a central part of their national
              identity.
            </h2>
            <h2>
              The Chinese Communist Party's occupation of Xinjiang in 1949
              marked a significant turning point in the Uyghurs' history. The
              party rising to power aided the influx of ethnic Chinese (Han),
              migrating to the region during the 1950s to 1990s which grew
              economic and ethnic disparities between the Han and the Uyghurs.
              The Chinese government's policies of repression and cultural
              assimilation were formally developed in 1957 through the
              Anti-Rightest policy that opposed local nationalism and led to a
              deepening sense of mistrust and resentment among the Uyghurs.
              These accusations took a more violent toll through a harsh
              cultural revolution that followed a decade later (1966-76) that
              sought out ethnic discrimination among the Uyghur population to
              prevent Islamic powers from infiltrating the Xinjiang province.
              The Chinese government's attempt to suppress Uyghur nationalism
              has only strengthened their desire for independence.
            </h2>
            <h2>
              Although this revolution “formally” ended in 1976, the Chinses
              government has since been detaining the Uyghurs located in the
              Xinjiang province and has implemented extremities such as camera
              monitoring and cultural genocide in an effort to sterilize the
              Uyghur national identity.
            </h2>
          </div>
        }
        title={"History"}
        img={require("./images/history.png")}
        source="https://www.thetimes.co.uk/article/chinas-problem-with-the-uighurs-vj6s5hhp2"
        caption="The Uyghurs brief period of independence in the kingdom of Uriqmi (present-day Xinjiang) before overcome by foreign rule"
      />

      <Info
        description={
          <div>
            <h2 className="">
              The Uyghur language stems from Turkic roots and has been heavily
              influenced by the Arabic dialect, which is more apparent in the
              actual calligraphy of the language. Language is a facet of a
              nation's identity which allows for collectives to communicate with
              their peers. Due to the distinctness of the Uyghur language from
              the main adopted by the Chinese government, the crackdown on the
              Uyghurs has only fueled the restrictions being placed on the
              Uyghurs, one of them being the prohibition of speaking their
              dialect.
            </h2>
          </div>
        }
        title={"Language"}
        img={require("./images/language.gif")}
        source="https://akademiye.org/en/?p=106"
        caption="The modern Uyghur Language. Note the resemblence it holds to the arabic lanaguage and calligraphy"
      />

      <Info
        description={
          <div className="">
            <h2>
              Much of the Uyghur national identity today has been influenced by
              centuries of Islamic influence over the nation. More specifically,
              the majority of the Uyghurs are Sunni Muslims, much from the
              influence of the Turkic Karakhanid group that ruled from the 9th
              to the 13th century. Prior to the Islamic influence, the Uyghurs
              had adopted Buddhism and Zoroastrianism. The Uyghur's adherence to
              Islam has strengthed their collective and created a sense of
              belonging not just inclusive of the nation, but the rest of the
              Muslim world. Having a shared belief aids the Uyghurs in enduring
              the discrimination of the Chinese government through having faith.
            </h2>
          </div>
        }
        title={"Religion/Spirituality"}
        img={require("./images/religion.jpeg")}
        source="https://www.uyghurcongress.org/en/chinese-authorities-continue-to-destroy-mosques-in-xinjiang/"
        caption="A mosque is a place of worship for many Muslims around the world. The Uyghurs also practice faith in the Mosques still standing in Xinjiang"
      />

      <Info
        description={
          <div>
            <h2>
              Much of the Uyghur culture stems from Islamic traditions, making
              it very distinct from Chinese culture. Following Islamic customs,
              the Uyghurs have adopted a modest dressing style and have two
              distinct festivals respective to the Islamic month which they name
              as the Corbon Festival and Lesser Bairam. Both festivals revolve
              around the gathering of family and the remembrance of faith,
              paying homage to how deep-rooted Islam is in the Uyghur national
              identity. The Chinese government's attempts to assert more control
              over the region of Xinjiang and the Uyghurs have limited the
              magnitude to which these festivals can be celebrated, but it is
              without a doubt that having these celebrations in the year eludes
              to the vibrant cultural customs of the Uyghurs. The CCP's policies
              of cultural assimilation have led to the suppression of Uyghur
              culture, leading to a sense of cultural marginalization and
              resistance among the Uyghur people. Although much of the Uyghur’s
              cultural practices root from Islamic traditions, the Uyghurs bring
              their distinctness through aspects like cuisine such as Sanzi, a
              special twisted bread.
            </h2>
          </div>
        }
        title={"Culture"}
        img={require("./images/culture.jpeg")}
        source="http://en.people.cn/n3/2016/0708/c98649-9083629-3.html"
        caption="Uyghurs celebrating Lesser Bairam, a relgious festival"
      />

      <Info
        description={
          <div>
            <h2>
              The majority of the Uyghurs reside in an autonomous region in
              China named Xhinjiange. Covering over 1.6 million square feet, the
              region occupies about a sixth of China’s total area. The region's
              geography has contributed to a sense of geographic isolation and
              self-reliance among the Uyghur people, from the time in which it
              was briefly occupied by teh Uyghurs as an independent nation in
              1933, till it was overrun by Han Chinese and the Chinese Communist
              party in 1944, where they claimed that the region was “an
              inseparable” part of China. Despite Xhinjiange having had its
              borders drawn and redrawn a multitude of times from different eras
              of rule, the Uyghurs cultural and linguistic distinctness from the
              rest of China advocates for why the Uyghurs choose to reside in
              the more isolated region of Xhinjiange. Along with Uyghur’s shared
              history in the region, the geography of the region has
              strengthened the Uyghur national identity from the centralization
              of culture and people in the region.
            </h2>
          </div>
        }
        title={"Geography"}
        img={require("./images/geography.jpeg")}
        source="https://intercontinentalcry.org/contemporary-colonialism-uyghurs-versus-china/"
        caption="A visual representation of Xinjiange's geographical isolation from the rest of China "
      />

      <div className="flex flex-row w-full p-20">
        <div className="flex flex-col relative w-3/5 gap-3">
          <h2 className="font-bold text-3xl">Icon</h2>
          <h2 className="font-light text-black italic">Hover on parts of the image below to learn more about each piece of the symbol</h2>
          <img
            src={require("./icon.png")}
            width={700}
            height={300}
            alt={"icon"}
          />
          <div
            className="absolute text-3xl left-56 top-56 w-16 h-20 bg-white opacity-0"
            onMouseEnter={() =>
              showInfo(
                "The top and leftmost positions in the iris represent the brighter facets of the Uyghur and their nationalistic identity, such as their vibrant festivals and cultural dances. These images represent the “light” that catches our eyes, paying homage to the brighter sides of the Uyghur Lifestyle and how their distinct culture continues to thrive despite the cultural repression enlisted upon them through the Chinese government."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute text-3xl left-72 top-40 w-20 h-20 bg-white opacity-0"
            onMouseEnter={() =>
              showInfo(
                "The top and leftmost positions in the iris represent the brighter facets of the Uyghur and their nationalistic identity, such as their vibrant festivals and cultural dances. These images represent the “light” that catches our eyes, paying homage to the brighter sides of the Uyghur Lifestyle and how their distinct culture continues to thrive despite the cultural repression enlisted upon them through the Chinese government."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute text-3xl left-96 top-52 w-16 h-24 bg-white opacity-0"
            onMouseEnter={() =>
              showInfo(
                "The bottom and rightmost positions in the iris represent the darker areas of our eyes, which respectively capture the darker themes in the Ughyer Lifestyle. This is seen in the rightmost image as it captures the ongoings of an Uyghur protest, going to show the struggles of having to fight against a greater authority to thrive as a distinct Nation. The bottommost image is shadowed in red, and again presents colours of Blue in the background which are symbolic of the Uyghr Muslim Crises. The red comes to represent the violence that these protests have entailed from the Chinese military, and capture the brutality that the Uyhers face behind closed doors."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute text-3xl left-72 bottom-64 w-20 h-10 bg-white opacity-0"
            onMouseEnter={() =>
              showInfo(
                "The bottom and rightmost positions in the iris represent the darker areas of our eyes, which respectively capture the darker themes in the Ughyer Lifestyle. This is seen in the rightmost image as it captures the ongoings of an Uyghur protest, going to show the struggles of having to fight against a greater authority to thrive as a distinct Nation. The bottommost image is shadowed in red, and again presents colours of Blue in the background which are symbolic of the Uyghr Muslim Crises. The red comes to represent the violence that these protests have entailed from the Chinese military, and capture the brutality that the Uyhers face behind closed doors."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute text-3xl left-72 bottom-48 w-20 h-10 bg-white opacity-0"
            onMouseEnter={() =>
              showInfo(
                "Tears are often linked with feelings of pain and sadness, and in the context of this icon, the tears seeping from the eye represent how the Chinese Communist Party has caused pain to the Uygher Nation by performing multiple violent crackdowns on the nation to sterilize them of their distinct national identity. From the bottom of the iris, we see the image is shadowed red, which then transitions into the red tears that display the CPP’s symbol in the eye. The correlation of tears being a facet of pain to displaying the CPP in the tears found in the piece indicate how the Chinese government has been the source of pain for this nation."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute text-3xl right-64 bottom-28 w-20 h-48 bg-black opacity-0"
            onMouseEnter={() =>
              showInfo(
                "Tears are often linked with feelings of pain and sadness, and in the context of this icon, the tears seeping from the eye represent how the Chinese Communist Party has caused pain to the Uygher Nation by performing multiple violent crackdowns on the nation to sterilize them of their distinct national identity. From the bottom of the iris, we see the image is shadowed red, which then transitions into the red tears that display the CPP’s symbol in the eye. The correlation of tears being a facet of pain to displaying the CPP in the tears found in the piece indicate how the Chinese government has been the source of pain for this nation."
              )
            }
            onMouseLeave={() => onLeave()}
          />
          <div
            className="absolute rounded-full text-3xl left-72 top-56 w-20 h-20 bg-black opacity-0"
            onMouseEnter={() =>
              showInfo(
                "The pupil of the eye symbolizes the gateway to one’s true identity. In the context of this icon, the shadow of an Uyghur protestor is shown in the pupil, whose mouth is covered by a red hand, symbolizing the Chinese communist party. This image is the centrefold of this icon because it represents the underlying truth of the Uyghur National Identity, and how this nation continues to struggle beneath the torment of the CPP (Chinese Communist Party). The image itself has become a popular symbol to represent the Uyghur nation, as it shows how they are repressed."
              )
            }
          />
        </div>
        <div
          className={`${
            (isHidden &&
              "block text-purple-400 w-2/5 flex items-center justify-center p-20 ") ||
            "hidden"
          }`}
        >
          <h2 className="bg-blue-700 text-white rounded-md p-3">{isHidden}</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-10">
        <h2 className="text-2xl font-extrabold">References:</h2>
        <Source
          last={"The Editors of Encyclopaedia Britannica"}
          date={"1998"}
          title={"Uyghur"}
          access={"March 8, 2023"}
          source={"https://www.britannica.com/topic/Uyghur"}
          publisher={"Britannica"}
        />
        <Source
          last={"Davis"}
          first={"V. W. E"}
          date={"2008"}
          title={"Uighur Language: Yesterday, Today, and Tomorrow"}
          access={"March 7, 2023"}
          source={"https://apps.dtic.mil/sti/pdfs/ADA493744.pdf"}
          publisher={"Asia-Pacific Center for Security Studies"}
        />
        <Source
          last={"Bhattacharya"}
          first={"A"}
          date={"2003"}
          title={"Conceptualising Uyghur Separatism in Chinese Nationalism"}
          access={"March 7, 2023"}
          source={
            "https://ciaotest.cc.columbia.edu/olj/sa/sa_jul03/sa_jul03bha02.html"
          }
          publisher={"Strategic Analysis: A Monthly Journal of the IDSA"}
        />
        <Source
          title={"Who are the Uyghurs"}
          access={"March 7, 2023"}
          source={
            "https://celcar.indiana.edu/materials/language-portal/uyghur/index.html"
          }
          publisher={"Center for Languages of the Central Asian Region"}
        />
        <Source
          last={"Regencia"}
          first={"T"}
          date={"2021, July 8"}
          title={"What you should know about China’s minority Uighurs"}
          access={"March 8, 2023"}
          source={
            "https://www.aljazeera.com/news/2021/7/8/uighurs-timeline#:~:text=The%20Uighurs%20are%20predominantly%20Muslims,religions%20including%20Zoroastrianism%20and%20Buddhism."
          }
          publisher={"Al Jazeera"}
        />
        <Source
          last={"Gavin"}
          date={"2023, Feb 3"}
          title={"The Uyghur Minority"}
          access={"March 8, 2023"}
          source={
            "https://www.chinahighlights.com/travelguide/nationality/uygur.htm#:~:text=Most%20Uyghur%20customs%20and%20traditions,Uyghur%20musical%20ensembles%20are%20popular."
          }
          publisher={"China Highlights"}
        />
        <Source
          last={"Sehran"}
          first={"Y"}
          date={"2020, October 27"}
          title={"Saving Uighur Culture From Genocide"}
          access={"March 8, 2023"}
          source={
            "https://www.theatlantic.com/international/archive/2020/10/chinas-war-on-uighur-culture/616513/"
          }
          publisher={"The Atlantic"}
        />
        <Source
          title={"Uighurs"}
          access={"March 8, 2023"}
          source={
            "https://www.everyculture.com/wc/Brazil-to-Congo-Republic-of/Uighurs.html"
          }
          publisher={" Every Culture"}
        />
      </div>
    </div>
  );
}

export default App;
