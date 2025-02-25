import React from 'react'

function SearchFilter({ filter, setFilter, search, setSearch, countrys, setCountry }) {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    }
    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value)
    }

    const sortCountries = (value) => {
        const sortCountry = [...countrys].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        });
        setCountry(sortCountry)
    }


    return (
        <div className='section_serach_filter'>
            <div className="input_container">
                <input type="text" className='txtSearch' value={search} placeholder='Search' onChange={handleInputChange} />
            </div>

            <div className=''>
                <button className='asc_desc' onClick={() => sortCountries("asc")}>Asc</button>
            </div>
            <div>
                <button className='asc_desc' onClick={() => sortCountries("dsc")}>Desc</button>
            </div>

            <div className="select_section">
                <select value={filter} onChange={handleSelectChange} >
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Ociania">Ociania</option>
                </select>
            </div>
        </div>
    )
}

export default SearchFilter
