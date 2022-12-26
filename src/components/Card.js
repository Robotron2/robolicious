import { Card } from "react-bootstrap"

const CardComponent = (props) => {
	let { imgSrc, title } = props.data

	return (
		<div>
			<Card className="p-0 overflow-hidden h-100 shadow">
				<div className="overflow-hidden rounded p-0 bg-light">
					<Card.Img variant="top" src={imgSrc} />
				</div>
				<Card.Body className="text-center">
					<Card.Title className="display-6">{title}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	)
}

export default CardComponent
