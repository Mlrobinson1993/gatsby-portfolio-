const siteMetadata = {
	title: `Mikey Robinson | Web Designer and Developer`,
	description: `We can help to boost your online presence with clear marketing strategies and engaging website design.`,
	image: `./m-robinson-web-developer-logo.png`,
	siteUrl: `https://mrobinsonwebdev.com`,
	siteLanguage: `en-GB`,
	siteLocale: `en_gb`,
	twitterUsername: `@mikeydevs`,
	authorName: `Mikey Robinson`,
};

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
				plugins: [
					{
						resolve: `gatsby-plugin-google-analytics`,
						options: {
							// The property ID; the tracking code won't be generated without it
							trackingId: 'UA-147962044-1',
							// Defines where to place the tracking script - `true` in the head and `false` in the body
							head: true,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/posts`, name: `posts` },
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/posts/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-hubspot',
			options: {
				trackingCode: '6797356',
				respectDNT: true,
				productionOnly: true,
			},
		},
		{
			resolve: `gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: '584128795760281',
			},
		},
	],
};
