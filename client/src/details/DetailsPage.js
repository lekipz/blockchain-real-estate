import DemoCarousel from '../components/Carousel/Carousel';
import './DetailsStyle.css'

export default function DetailsPage() {
    return (
        <div>
            <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2">
                <h2 className="text-3xl mb-2">Détails du bien</h2>
            </section>
            <div className="detailsContainer">
                <div className="detailsInformations">
                    <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2 mt-10">
                        <h3 className="lol">Nom: </h3>
                    </section>
                    <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2">
                        <h3 className="lol">Prix: </h3>
                    </section>
                    <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2">
                        <h3 className="lol">Localisation: </h3>
                    </section>
                    <section className="md:max-w-6xl mx-auto pt-4 px-4 pt-2">
                        <h3 className="lol">Description: </h3>
                    </section>
                    <section className="px-4 pt-2 description">
                    Dein Syria per speciosam interpatet diffusa planitiem. hanc nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia advecticiis ita adfluere copiis et internis, et Laodicia et Apamia itidemque Seleucia iam inde a primis auspiciis florentissimae.
                    Adolescebat autem obstinatum propositum erga haec et similia multa scrutanda, stimulos admovente regina, quae abrupte mariti fortunas trudebat in exitium praeceps, cum eum potius lenitate feminea ad veritatis humanitatisque viam reducere utilia suadendo deberet, ut in Gordianorum actibus factitasse Maximini truculenti illius imperatoris rettulimus coniugem.
                    </section>
                </div>
                <div className="detailsCarrousel">
                    <DemoCarousel></DemoCarousel>
                </div>
            </div>
        </div>
    );
}