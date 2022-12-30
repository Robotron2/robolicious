import { Card } from "react-bootstrap"

const CardComponent = (props) => {
	let imgSrc = props.image
	let title = props.title

	return (
		<div>
			<Card className="p-0 overflow-hidden h-100 shadow myCard">
				<div className="overflow-hidden rounded p-0 ">
					<Card.Img variant="top" src={imgSrc} />
				</div>
				<Card.Body className="text-center ">
					<Card.Title className="display-6 text-danger">{title}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	)
}

export default CardComponent
