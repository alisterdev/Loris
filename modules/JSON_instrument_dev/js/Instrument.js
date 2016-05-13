LorisInstrument = React.createClass({
    displayName: 'LorisInstrument',


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
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Lawton-Brody Instrumental Activities of Daily Living Scale'
            ),
            React.createElement('br', null),
            React.createElement(Select, { label: 'What version of the test was completed?', options: ['Version 1', 'Version 2', 'Version 3'] })
        );
    }
});

RInstrument = React.createFactory(LorisInstrument);

Select = React.createClass({
    displayName: 'Select',


    propTypes: {
        name: React.PropTypes.array.isRequired
    },

    getDefaultProps: function () {
        return {
            'label': '',
            'options': []
        };
    },

    render: function () {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-sm-4 col-md-4 col-lg-4' },
                this.props.label
            ),
            React.createElement(
                'div',
                { className: 'col-sm-8 col-md-8 col-lg-8' },
                React.createElement(
                    'select',
                    { name: '', id: '', className: 'form-control' },
                    React.createElement(
                        'option',
                        { value: '' },
                        this.props.options[0]
                    ),
                    React.createElement(
                        'option',
                        { value: '' },
                        this.props.options[1]
                    ),
                    React.createElement(
                        'option',
                        { value: '' },
                        this.props.options[2]
                    )
                )
            )
        );
    }
});