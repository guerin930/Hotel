import React from 'react';
import Img from '../../images/customers/transfer.svg'


const Paiement = ({ datafind }) => {
   /* const fullname = datafind.fullname;
    const email = datafind.email;
    const phone = datafind.phone;
    const startDate = datafind.startDate;
    const endDate = datafind.endDate;
    const typechambre = datafind.typechambre;
    const nbrchambre = datafind.nbrchambre;
    const nbrEnfant = datafind.nbrEnfant;
    const nbrAdult = datafind.nbrAdult;
    const message = datafind.message;
    const adresse = datafind.adresse;
    const NetApayer = datafind.total;
    let start = new Date(datafind.startDate)
    let end = new Date(datafind.endDate)

    const order = {
        customer: `Mr/Mdme ${datafind.fullname}`,
        total: datafind.total/430,
        items: [{
            sku: 'reservation',
            name: datafind.typechambre,
            price: datafind.total / datafind.nbrchambre,
            quantity: datafind.nbrchambre,
            currency: 'FCFA'
        }]
    };
    const data = {
        fullname, email, phone, startDate, endDate, typechambre, nbrchambre, nbrEnfant, nbrAdult, message, adresse, NetApayer
    }*/

    const handleSubmit = async (e) => {
        e.preventDefault();
       
    }
    const imprimer = (divName) => {
        let printContents = document.getElementById(divName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      }

    return (
        <div className="profil-page">
            <div className="book-form-content">
                <div className="pay-form">
                    <div className="wpcf7" id="print">
                        <h3 className="success">votre demande a été soumis avec success</h3>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name">
                                    Mr/Mdme :  {datafind.fullname} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name">
                                    Adresse : {datafind.adresse} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="typechambre">
                                    Type de reservation : {datafind.typechambre} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrchambre">
                                    Nombre de chambre : {datafind.nbrchambre} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrEnfant">
                                    Nombre d'enfant : {datafind.nbrEnfant} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrAdult">
                                    Nombre d'adulte : {datafind.nbrAdult} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                                <p> Votre Séjour date du  : {/*start.toDateString()} au {end.toDateString()*/} </p>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                                <p> Votre Facture est de : {datafind.total} FCFA veuillez passez au paiment</p>
                                <p>Agréable séjour !</p>
                            </div>
                        </div>
                     
                        <div class="rang-form">
                            <div className="colonne">
                            <input onClick={()=> imprimer('print')} className="wpcf7-submit" type="button" value="imprimer la facture" />
                            </div>
                        </div>
                        <div className="colonne">
                                <input onClick={handleSubmit} className="wpcf7-submit" type="button" value="Confirmer" />
                                <div className="submit error"></div>
                            </div>
                        <p>Merci de nous faire confiance </p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Img} alt="login" />
                </div>
            </div>
        </div>
    );
};

export default Paiement;