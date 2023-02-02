import {Component} from 'react'

import {
  MainContainer,
  Title,
  ImageDisplayContainer,
  FormContainer,
  Label,
  Input,
  Select,
  CustomButton,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

const defaultState = {
  showImage: false,
  imageUrl: '',
  topText: '',
  bottomText: '',
  optionId: fontSizesOptionsList[0].optionId,
}

class MemeGenerator extends Component {
  state = defaultState

  onChangeUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({optionId: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState({showImage: true})
  }

  render() {
    const {imageUrl, topText, bottomText, optionId, showImage} = this.state
    return (
      <MainContainer>
        <Title show>Meme Generator</Title>
        {showImage && (
          <ImageDisplayContainer data-testid="meme" url={imageUrl}>
            <Paragraph fontSize={optionId}>{topText}</Paragraph>
            <Paragraph fontSize={optionId}>{bottomText}</Paragraph>
          </ImageDisplayContainer>
        )}
        <FormContainer onSubmit={this.onSubmitForm}>
          <Title>Meme Generator</Title>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            type="url"
            placeholder="Enter the Image URL"
            onChange={this.onChangeUrl}
          />

          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            value={topText}
            type="text"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />

          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            value={bottomText}
            type="text"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />

          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            id="fontSize"
            value={optionId}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </Select>

          <CustomButton type="submit">Generate</CustomButton>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
