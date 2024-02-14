/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      "type": "doc",
      "id": "intro",
    },
    {
      "type": "category",
      "label": "Getting started",
      "collapsible": true,
      "collapsed": false,
      "items": [
        {
          "type": "doc",
          "id": "int/Overview",
        },
        {
          "type": "doc",
          "id": "int/key-concepts",
        },
        {
          "type": "category",
          "label": "Quickstart Guides",
          "collapsible": true,
          "collapsed": false,
          "items": [
            {
              "type": "category",
              "label": "Create a DV alone",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "int/quickstart/alone/test-locally",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/alone/create-keys",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/alone/deploy",
                },
              ],
            },
            {
              "type": "category",
              "label": "Create a DV as a group",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "int/quickstart/group/quickstart-group-leader-creator",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/group/quickstart-group-operator",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/group/quickstart-cli",
                },
              ],
              "link": {
                "type": "doc",
                "id": "int/quickstart/group/index",
              },
            },
            {
              "type": "doc",
              "id": "int/quickstart/activate-dv",
            },
            {
              "type": "doc",
              "id": "int/quickstart/update",
            },
            {
              "type": "doc",
              "id": "int/quickstart/quickstart-exit",
            },
            {
              "type": "doc",
              "id": "int/quickstart/quickstart-mainnet",
            },
            {
              "type": "category",
              "label": "Advanced Guides",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/quickstart-sdk",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/quickstart-builder-api",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/quickstart-split",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/monitoring",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/obol-monitoring",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/self-relay",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/adv-docker-configs",
                },
                {
                  "type": "doc",
                  "id": "int/quickstart/advanced/quickstart-combine",
                },
              ],
            },
          ],
          "link": {
            "type": "doc",
            "id": "int/quickstart/index",
          },
        },
        {
          "type": "category",
          "label": "FAQ",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "id": "int/faq/general",
            },
            {
              "type": "doc",
              "id": "int/faq/errors",
            },
            {
              "type": "doc",
              "id": "int/faq/risks",
            },
            {
              "type": "doc",
              "id": "int/faq/dkg_failure",
            },
          ],
        },
      ],
    },
    {
      "type": "category",
      "label": "Charon",
      "collapsible": true,
      "collapsed": false,
      "items": [
        {
          "type": "doc",
          "id": "charon/intro",
        },
        {
          "type": "doc",
          "id": "charon/dkg",
        },
        {
          "type": "doc",
          "id": "charon/cluster-configuration",
        },
        {
          "type": "doc",
          "id": "charon/networking",
        },
        {
          "type": "doc",
          "id": "charon/charon-cli-reference",
        },
      ],
    },
    {
      "type": "category",
      "label": "DV Launchpad",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "dvl/intro",
        },
      ],
    },
    {
      "type": "category",
      "label": "Smart contracts",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sc/introducing-obol-splits",
        },
      ],
    },
    {
      "type": "category",
      "label": "Security",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sec/overview",
        },
        {
          "type": "doc",
          "id": "sec/bug-bounty",
        },
        {
          "type": "doc",
          "id": "sec/contact",
        },
        {
          "type": "doc",
          "id": "sec/ev-assessment",
        },
        {
          "type": "doc",
          "id": "sec/smart_contract_audit",
        },
        {
          "type": "doc",
          "id": "sec/threat_model",
        },
      ],
    },
    {
      "type": "category",
      "label": "Contribution & Feedback",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "cg/bug-report",
        },
        {
          "type": "doc",
          "id": "cg/docs",
        },
        {
          "type": "doc",
          "id": "cg/feedback",
        },
      ],
    },
    {
      "type": "category",
      "label": "Further reading",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "fr/eth",
        },
        {
          "type": "doc",
          "id": "fr/testnet",
        },
      ],
    },
  ],
  apiSidebar: [
    {
      "type": "doc",
      "id": "sdk/index",
      "label": "Intro",
    },
    {
      "type": "category",
      "label": "Enumerations",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/enumerations/FORK_MAPPING",
        },
      ],
    },
    {
      "type": "category",
      "label": "Classes",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/classes/Client",
        },
      ],
    },
    {
      "type": "category",
      "label": "Interfaces",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/interfaces/ClusterDefintion",
        },
      ],
    },
    {
      "type": "category",
      "label": "Type-Aliases",
      "collapsible": true,
      "collapsed": true,
      "items": [
        {
          "type": "doc",
          "id": "sdk/type-aliases/BuilderRegistration",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/BuilderRegistrationMessage",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterCreator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterOperator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/ClusterValidator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/DepositData",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/DistributedValidator",
        },
        {
          "type": "doc",
          "id": "sdk/type-aliases/OperatorPayload",
        },
      ],
    },
  ], // Add custom sidebar for "api" folder

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
