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
            /*
            "Meta" : {
                "InstrumentVersion": "BMI v0.0.1-dev",
                "InstrumentFormatVersion" : "v0.0.1-dev",
                "ShortName" : "BMI",
                "LongName"  : "Body Mass Index",
                "IncludeMetaDataFields" : false
            },
            "Elements" : [
                {
                    "Type": "numeric",
                    "Name": "height",
                    "Description": "Your height (inches)",
                    "Options" : {
                        "NumberType": "integer",
                        "MinValue": 0,
                        "MaxValue": 100
                    }
                },
                {
                    "Type": "numeric",
                    "Name": "weight",
                    "Description": "Your weight (lbs)",
                    "Options" : {
                        "NumberType": "integer",
                        "MinValue": 0,
                        "MaxValue": 500
                    }
                },
                {
                    "Type": "score",
                    "Name": "bmi",
                    "Description": "Your BMI",
                    "Options": {
                     }
                }
            ]
            */
        };
    },

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello, world!"
            ),
            React.createElement(Element, null)
        );
    }
});

RInstrument = React.createFactory(LorisInstrument);

Element = React.createClass({
    displayName: "Element",

    render: function () {
        return React.createElement(
            "span",
            null,
            "MyElement"
        );
    }
});