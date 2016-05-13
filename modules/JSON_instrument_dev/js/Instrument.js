LorisInstrument = React.createClass({
    displayName: "LorisInstrument",

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return null;
    },

    getDefaultProps: function () {
        return {
            "Meta": {
                "InstrumentVersion": "BMI v0.0.1-dev",
                "InstrumentFormatVersion": "v0.0.1-dev",
                "ShortName": "BMI",
                "LongName": "Body Mass Index",
                "IncludeMetaDataFields": false
            },
            "Elements": [{
                "Type": "numeric",
                "Name": "height",
                "Description": "Your height (inches)",
                "Options": {
                    "NumberType": "integer",
                    "MinValue": 0,
                    "MaxValue": 100
                }
            }, {
                "Type": "numeric",
                "Name": "weight",
                "Description": "Your weight (lbs)",
                "Options": {
                    "NumberType": "integer",
                    "MinValue": 0,
                    "MaxValue": 500
                }
            }, {
                "Type": "score",
                "Name": "bmi",
                "Description": "Your BMI",
                "Options": {
                    /* None currently */
                }
            }]
        };
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                this.props.Meta.LongName
            )
        );
    }
});

RInstrument = React.createFactory(LorisInstrument);