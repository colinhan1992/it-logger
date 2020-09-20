import React from 'react';

export const Searchbar = () => {
  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div claseName="nav-wrapper">
        <form>
          <div claseName="input-field">
            <input id="search" type="search" required />
            <label claseName="label-icon" htmlFor="search">
              <i claseName="material-icons">search</i>
            </label>
            <i claseName="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Searchbar;
