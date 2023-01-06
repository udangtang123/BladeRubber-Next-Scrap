import template from '../config/styles';

const getMyStyle = ({ isHovered }) => ({
	scrapHeader: {
    display: 'flex',
	},
  scrapeBtn: {
		width: '130px',
		padding: '5px 15px',
		fontSize: '15px',
		backgroundColor: template.colors.red,
		color: template.colors.white,
		border: 'none'
	},
	scrapHeaderItem: {
		width: '50%',
		fontSize: '18px',
		fontWeight: '800',
		color: template.colors.red,
		backgroundColor: isHovered ? 'rgba(178,178,178,1)' : 'rgba(178,178,178,0.5)',
		paddingLeft: '20px',
		paddingRight: '20px',
		paddingTop: '10px',
		paddingBottom: '10px',
		textAlign: 'center',
		cursor: 'pointer',
		border: 'none'
	}
});

export { getMyStyle };
