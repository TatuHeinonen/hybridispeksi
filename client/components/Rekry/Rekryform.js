import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { DropdownReduxform } from '../../Utils/Form';

import styles from './Rekry.css';

let RekryForm = (props) => {
  const { kaikkiTehtavat, kaikkiJarjestot, handleSubmit } = props;

  return (
    <div className={'container-fluid ' + styles.container}>

      <div className={'row ' + styles.banner} />

      <div className={'row justify-content-sm-center ' + styles.content}>
        <div className={'col-sm-6 ' + styles.form_canvas}>
          <h2>Rekryilmoittautuminen</h2>
          <br />
          <p>Täytä tietosi allaoleviin kenttiin.
            Tähdellä merkityt kentät ovat pakollisia. Haettaviin tehtäviin pitää
            täyttää vähintään ensisijainen hakutoive. Lisätietoja-kenttään
            tulee täyttää omia taustojasi,
            jotka tukevat hakutoiveitasi.
          </p>
          <br />
          <form onSubmit={handleSubmit}>

            <div className={'row form-group align-items-center ' + styles.fname}>
              <div className="col-sm-3">
                <label htmlFor="fnameInput" className={styles.label}>Etunimi:
                  <span className={styles.tahti}>*</span>
                </label>
              </div>
              <div className="col">
                <Field name="fname" component="input" type="text" className="form-control" />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.sname}>
              <div className="col-sm-3">
                <label htmlFor="snameInput" className={styles.label}>Sukunimi:
                  <span className={styles.tahti}>*</span>
                </label>
              </div>
              <div className="col">
                <Field name="lname" component="input" type="text" className="form-control" />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.email}>
              <div className="col-sm-3">
                <label htmlFor="emailInput" className={styles.label}>Sähköposti:
                  <span className={styles.tahti}>*</span>
                </label>
              </div>
              <div className="col">
                <Field name="email" component="input" type="email" className="form-control" />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.pnumber}>
              <div className="col-sm-3">
                <label htmlFor="pnumberInput" className={styles.label}>Puhelinnumero:
                  <span className={styles.tahti}>*</span>
                </label>
              </div>
              <div className="col">
                <Field name="pnumber" component="input" type="tel" className="form-control" />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>Ensisijainen tehtävä:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat1"
                  component={DropdownReduxform}
                  options={props.kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat1 : 'grafiikka'}
                />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>
                  Ensimmäinen varatehtävä:
                </label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat2"
                  component={DropdownReduxform}
                  options={kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat2 : 'grafiikka'}
                />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.tehtavat}>
              <div className="col-sm-3">
                <label htmlFor="tehtavatInput" className={styles.label}>Toinen varatehtävä:</label>
              </div>
              <div className="col">
                <Field
                  name="tehtavat3"
                  component={DropdownReduxform}
                  options={kaikkiTehtavat}
                  selected={props.formState ? props.formState.tehtavat3 : 'grafiikka'}
                />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.jarjesto}>
              <div className="col-sm-3">
                <label htmlFor="jarjestoInput" className={styles.label}>Järjestö:
                  <span className={styles.tahti}>*</span>
                </label>
              </div>
              <div className="col">
                <Field
                  name="jarjesto"
                  component={DropdownReduxform}
                  options={kaikkiJarjestot}
                  selected={props.formState ? props.formState.jarjesto : ''}
                />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.lisatiedot}>
              <div className="col-sm-3">
                <label htmlFor="lisatiedotInput" className={styles.label}>Lisätietoja:<span className={styles.tahti}>*</span></label>
              </div>
              <div className="col">
                <Field component="textarea" name="lisatiedot" className="form-control" rows="4" />
              </div>
            </div>
            <div className={'row form-group align-items-center ' + styles.jasen}>
              <div className="col-sm-7">
                <label htmlFor="jasenInput" className={styles.label}>Haluan liittyä HybridiSpeksi ry:n jäseneksi:</label>
              </div>
              <div className="col-sm-4 form-check form-check-inline">
                <Field
                  name="jasenyys"
                  component="input"
                  type="radio"
                  value="true"
                  checked={props.formState && props.formState.jasenyys === 'true'}
                  className={styles.jasenradio}
                /> Kyllä
                <Field
                  name="jasenyys"
                  component="input"
                  type="radio"
                  value="false"
                  checked={props.formState && props.formState.jasenyys === 'false'}
                  className={styles.jasenradio}
                /> Ei
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Mikäli haet yhdistyksen jäseneksi, kirjoita lisätietoihin
                  oma verotuskuntasi ja Etunimi -kenttään kaikki etunimet.
                </p>
              </div>
            </div>

            <div className={'row form-group align-items-center justify-content-sm-center ' + styles.submit}>
              <div className="col-sm-3">
                {props.rekryAuki ?
                  <button className="btn btn-default" type="submit">Lähetä hakemus</button>
                  :
                  <p><i>Rekry on suljettu!</i></p>
                }
              </div>
            </div>

          </form>
          <div className="row justify-content-center">
            <div className="col-sm-7">
              {props.messages}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

RekryForm.propTypes = {
  messages: PropTypes.object,
  rekryAuki: PropTypes.bool,
  kaikkiTehtavat: PropTypes.array,
  kaikkiJarjestot: PropTypes.array,
  handleSubmit: PropTypes.func,
  formState: PropTypes.object,
};

const mapStateToProps = state => ({
  formState: getFormValues('rekryForm')(state),
});

RekryForm = connect(mapStateToProps)(RekryForm);

export default reduxForm({
  form: 'rekryForm',
  initialValues: {
    jasenyys: 'true',
  },
})(RekryForm);
