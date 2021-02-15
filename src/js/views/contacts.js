import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	console.log("page contacts.js", store.contacts);
	return (
		<div className="container">
			<div>
				<h1 className="text-center">Contacts List</h1>
				<p className="text-right my-3">
					<Link className="btn btn-outline-success" to="/add">
						Add new contact
					</Link>
				</p>
			</div>
			<div>
				{!store.contacts
					? "Loading..."
					: store.contacts.map((item, index) => {
							return (
								<li key={index} className="list-group-item list-group-item-action">
									<div className="row">
										<div className="col">
											<label className="name lead"> {item.full_name} </label>
											<br />
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted">{item.address}</span>
											<br />
											<span
												className="fa fa-phone fa-fw text-muted mr-3"
												data-toggle="tooltip"
												title=""
												data-original-title=""
											/>
											<span className="text-muted small">{item.phone}</span>
											<br />
											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted small text-truncate">{item.email}</span>
										</div>
									</div>
								</li>
							);
					  })}
			</div>
		</div>
	);
};
