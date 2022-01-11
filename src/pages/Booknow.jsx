import React, { Component } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import BookDataService from '../services/book.services'

export default class Booknow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg,
            startDate: new Date(),
            endDate: new Date(),
            id: null,
            nom: "",
            tel: "",
            paymentOption: ""
        };
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeTel = this.handleChangeTel.bind(this);
        this.handleChangePaymentOption = this.handleChangePaymentOption.bind(this);

    }
    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
    handleChangeName(e) {
        this.setState({
            nom: e.target.value
        })
    }
    handleChangeTel(e) {
        this.setState({
            tel: e.target.value
        })
    }
    handleChangePaymentOption(e) {
        this.setState(
            {
                paymentOption: e.target.value
            }
        )
    }
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }
    static contextType = RoomContext;

    newTutorial = () => {
        this.setState({
          id: null,
          nom: "",
          tel: "",
          paymentOption: "",
          published: false
        });}
    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
        if (!room) {
            return (<div className="container roomerror">
                <div className="row my-5">
                    <div className="col-md-6 col-12 mx-auto">
                        <div className="card shadow-lg border-0 p-4 error">
                            <h1 className="text-center display-4">Désolé ! </h1>
                            <h3>Aucune correspondance de chambre trouvée...</h3>
                            <Link to="/rooms" className="btn btn-warning mt-4 ">Retour aux chambres</Link>
                        </div>
                    </div>
                </div>
            </div>);
        }
        const { name, capacity, size, price, breakfast, pets, images, featured } = room;
        const [mainImg, ...defaultBcg] = images;
        /*const Totalp = daysLeft * price;*/
        const typeChambre = name; const nbrplc = capacity; const taille = size;
        const breakfasts = breakfast; const petss = pets; const features = featured;
        const nom = this.state.nom; const tel = this.state.tel;
        const startDates = this.state.startDate; const endDates = this.state.endDate;
        const nbrJ = daysLeft; const prixPj = price; const totalP = daysLeft * price;
        const paymentOption = this.state.paymentOption
        const data = {
            typeChambre, nbrplc, taille,breakfasts, petss, features,
              nom, tel, startDates, endDates, nbrJ, prixPj, totalP, paymentOption
        }

        /*const booknow = async (e) => {
            e.preventDefault()
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/test/`,
                data: {data}
            }).then((res) => {
                console.log(res);
                
            }).catch((err) => { console.log(err); })
        }*/
        const booknow = (e) => {
            e.preventDefault();          
            BookDataService.create(data)
                .then(response => {
                  this.setState({
                    id: response.data.id,
                    nom: response.data.nom,
                    tel: response.data.tel,
                    paymentOption: response.data.paymentOption,
                    published: true
                  });
                  console.log(response.data);
                })
                .catch(e => {
                  console.log(e);
                });
            this.newTutorial();
    }
        
        const imprimer = (divName) => {
            let printContents = document.getElementById(divName).innerHTML;
            let originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
          }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4" id="print">
                        <div>
                            <h1 className="display-4">Reservation</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 my-auto">
                                <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
                            </div>
                            <div className="col-md-6 col-12 my-auto">
                                <h1>Details des chambres</h1>
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Type de chambre</th>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <th>Nombre de place</th>
                                            <td>{capacity}</td>
                                        </tr>
                                        <tr>
                                            <th>taille</th>
                                            <td>{size} m².</td>
                                        </tr>
                                        <tr>
                                            <th>petit dejeuner</th>
                                            <td>{breakfast === true ? `inclus` : `non inclus`}</td>
                                        </tr>
                                        <tr>
                                            <th>animeaux de compagnie</th>
                                            <td>{pets === true ? `autorisé` : `Non autorisé`}</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="fullname" className="font-weight-bolder mr-3">
                                        Nom{" "}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Entrer le nom complet"
                                        className="form-control"
                                        value={this.state.nom}
                                        onChange={this.handleChangeName}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="phone" className="font-weight-bolder mr-3">
                                        Telephone{" "}
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="your Contact"
                                        className="form-control"
                                        value={this.state.tel}
                                        onChange={this.handleChangeTel}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Date d'arrivée </label>
                                    <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="Todate" className="font-weight-bolder mr-3">Date de depart </label>
                                    <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h6 className="font-weight-bolder">Nombre de jour : {daysLeft}</h6>
                                <mark>
                                    Veuillez vous assurer que l'heure d'enregistrement est de 9h00 à 12h00</mark>
                            </div>
                            <div className="col-md-6 col-12">
                                <h6 className="font-weight-bold">Prix par jour : <span className="badge badge-info"> {price} FCFA</span></h6>
                                <h6 className="font-weight-bold">Prix total a payer : <span className="text-primary">{daysLeft * price} FCFA</span></h6>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                    <select className="form-control"
                                        onChange={this.handleChangePaymentOption}
                                        value={this.state.paymentOption}>
                                        <option ></option>
                                        <option >Orange Money</option>
                                        <option >MTN Money</option>
                                        <option >Express Union Mobile Money</option>
                                        <option >Payer sur place</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-12 my-auto">
                                <div className="col-md-6 col-12 float-right">
                                    <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Effectuer</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 my-auto">
                                <div className="col-md-6 col-12 float-right">
                                    <button className="btn btn-block btn-outline-primary" onClick={() => imprimer('print')}>Imprimer Facture</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="thanks">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body p-4">
                                <h3>Merci </h3>
                                <p className="lead">votre chambre a été reservé avec success....</p>
                            </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-dark">Accueil</Link>
                                <button onClick={booknow} type="button" className="btn btn-secondary" data-dismiss="modal">fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}