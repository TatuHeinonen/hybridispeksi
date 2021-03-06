import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.css';

class Home extends Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }

  render() {
    return (
      <div className={'container-fluid ' + styles.container}>
        <div className={'row justify-content-center align-items-center ' + styles.content_home}>
          <div className={'col-sm-12 col-xl-11  align-items-center ' + styles.slogan}>
            <div className={'d-md-block align-items-center ' + styles.slogan}>
              <div className="row justify-content-lg-center justify-content-center align-items-center">
                <div className={'col-12 col-sm-10 col-md-9 ' + styles.rekry}><h2 className={styles.rekry_header}>Tule mukaan <br /><strong>HYBRIDISPEKSIIN!</strong></h2>
                  <p className={styles.rekry_desc}>Matkaa kanssamme mystisen Kung Fun maailmaan. </p>
                  <p className={styles.rekry_desc}>Vuoden 2019 HybridiSpeksissä on luvassa näyttäviä taisteluita,
                karismaattisia hahmoja, höyryäviä kylpyjä, koskettavaa romantiikkaa
                ja monipuolisia musiikkinumeroita!
                  </p>
                  <p className={styles.rekry_desc}>Tunnetko lohikäärmeen voiman sisälläsi? Olit sitten
                aloitteleva tai kokenut speksaaja - Tahdomme sinut! Olet tervetullut
                joukkoomme, haetpa sitten esiintyjäksi, valoteknikoksi, muusikoksi,
                markkinoijaksi tai joksikin siltä väliltä!
                  </p>
                  <p className={styles.rekry_date}>Tarkemmat speksit selviävät tiistaina 18.9.
                klo 17:30 paikassa XXII (Agora)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'row align-items-top justify-content-center text-center ' + styles.content_contents}>
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/speksit">
              <p className={'material-icons ' + styles.linkicon}>history</p>
              <h3>Aiemmat speksit</h3>
              <p className="">HybridiSpeksi on järjestetty jo vuodesta 2015! Lue lisää täältä.</p>
            </Link>
          </div>
          {/* <div className="col-sm-3 align-items-center">
          <Link to="/galleria">
            <p className={"material-icons " + styles.linkicon}>insert_photo</p>
            <h3>Kuvagalleria</h3>
            <p className="">Speksiä tehdessä on aina hyvä fiilis! Kuvat kertovat enemmän kuin tuhat sanaa ja täällä niitä kuvia voi katsella!</p>
          </Link>
          </div> */}
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/yhdistys">
              <p className={'material-icons ' + styles.linkicon}>face</p>
              <h3>Yhdistys</h3>
              <p className="">Kuka tekee speksissä mitäkin? Lavan tapahtumien lisäksi projektissa on suuri joukko muita  tiimejä ja tiimiläisiä.
                            Yhdistys-sivulta löydät yhteystietojen lisäksi hallituksen ja tuotantotiimin kokoonpanot.
              </p>
            </Link>
          </div>
          <div className={'col-lg-3 col-md-10 col-sm-10 align-items-center ' + styles.internallink}>
            <Link className={styles.internallink} to="/muutspeksit">
              <p className={'material-icons ' + styles.linkicon}>local_play</p>
              <h3>Turun muut speksit</h3>
              <p className="">Speksi on opiskelijateatteria parhaimmillaan! Tutustu Turun muihin spekseihin täältä.</p>
            </Link>
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.hr}>
          <div className="col-8">
            <hr />
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.content_speksi}>
          <div className={'col-sm-12 ' + styles.hslogo} />
          <div className={'col-md-10 col-lg-8 col-xl-6  ' + styles.speksi_desc}>
            {/* <p className={"d-block text-center material-icons " + styles.infoicon}>info_outline</p> */}
            <h1 className={styles.otsikko}>HybridiSpeksi</h1>
            <p>HybridiSpeksi on Turun yliopiston luonnontieteiden ja tekniikan tiedekunnan opiskelijoiden vuosittain toteuttama teatteriproduktio.
                Ensimmäinen HybridiSpeksi <strong>H.A.L.I.</strong> nähtiin vuonna 2015 Barker-teatterilla.
            </p>
            <p>Vuonna 2016 Tanssiteatteri ERIn valtasi BratvaKontra, lähitulevaisuuteen sijoittuva tiivistunnelmainen etsiväseikkailu.
            Keväällä 2017 HybridiSpeksi siirtyi Manilla-teatterille,
            jossa vuorossa oli kansallisromanttinen <strong>Kruunun Kohtalo &ndash; Kalevalan perintö</strong>.
            </p>
            <h3>2018</h3>
            <p>Tulevan produktion tuotanto- ja käsikirjoitustiimi  valittiin jo ennen kesää. Rekrytilaisuus pidettiin 26.9. ja runsaan satapäisen produktion
                voimin katseemme on suunnattu kohti 27.3. koittavaa ensi-iltaa Manilla-teatterilla.
            </p>
            <h3>Speksi</h3>
            <p>Speksi on interaktiivista opiskelijateatteria. Siinä yhdistyvät käsikirjoitettu teatteri, improvisaatio ja musikaali.
            Esityksissä yleisö voi vaikuttaa muutoin käsikirjoitetun esityksen kulkuun huutamalla <strong>“Omstart”</strong>, jolloin edellinen toiminta, repliikki tai musiikkinumero tehdään uudelleen erilaisella tavalla improvisoiden.
            Lisää spekseistä ja niiden historiasta voi lukea esimerkiksi  <a className={styles.externallink} href="https://fi.wikipedia.org/wiki/Speksi">Wikipediasta</a>.
            </p>
          </div>
        </div>

        <div className={'row justify-content-center ' + styles.hr}>
          <div className="col-8">
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className={'col-lg-6 col-md-10 col-sm-10 ' + styles.sponsors}>
            <h2>Menossa mukana</h2>
            <div className={'col-12 ' + styles.sponsor}>
              <a href="https://www.tek.fi/fi">
                <img src="/assets/images/tek.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      /*
      //Carousel under construction

      <div id="carousel" className={"carousel slide " + styles.carousel} data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className={"d-block h-100 " + styles.carousel_image} src="assets/images/carousel/1_peikot.jpg" alt="First slide"/>
            <div class="carousel-caption d-md-block">
              <h3>Otsikko 1</h3>
              <p>Alaotsikko 1</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className={"d-block " + styles.carousel_image} src="assets/images/carousel/2_ilmari1.jpg" alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block text-left">
              <h3>Otsikko 2</h3>
              <p>Alaotsikko 2</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className={"d-block w-100 " + styles.carousel_image} src="assets/images/carousel/3_ilmari2.jpg" alt="Third slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h3>Otsikko 3</h3>
              <p>Alaotsikko 3</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      */

    );
  }
}

export default Home;
