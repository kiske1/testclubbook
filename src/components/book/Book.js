import React, { useState, useEffect } from "react";
import TestataGolf from "../common/TestataGolf";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as clubsActions from "../../redux/actions/clubsActions";

function Book({ clubs, loadClubs, history, ...props }) {
  const [club, setClub] = useState({ ...props.club });

  useEffect(() => {
    if (clubs.length === 0) {
      loadClubs().catch(error => {
        console.log("Load ing courses failed" + error);
      });
    } else {
      console.log({ ...props.club });
      //setClub({ ...props.club });
    }
  }, [props.club]);

  return (
    <>
      <div>BOOK</div>
    </>
  );
}

Book.propTypes = {
  club: PropTypes.object.isRequired,
  loadClubs: PropTypes.func.isRequired,
  clubs: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export function getClubBySlug(clubs, slug) {
  //debugger;
  return clubs.find(club => club.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  return {
    clubs: state.clubs,
    club:
      slug && state.clubs.length > 0
        ? getClubBySlug(state.clubs, slug)
        : {
            id: null,
            denominazione: "ERROR",
            citta: "ERROR",
            telefono: "ERROR",
            email: "ERROR"
          }
  };
}

const mapDispatchToProps = {
  loadClubs: clubsActions.loadClubs
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
