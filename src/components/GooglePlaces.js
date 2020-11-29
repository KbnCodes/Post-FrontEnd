import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  
} from "react-places-autocomplete";

export default function App() {
  const [address, setAddress] = React.useState("");
  

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    setAddress(value);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
        
            Location : <input className="form-control"  {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                return (
                  <div {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}