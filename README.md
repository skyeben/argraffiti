## Background

This demo was originally built for my Extended Project Qualification, albeit as a scaled-down version. The project was centred around how experiential traits affect individual interpretation of graffiti and included reference to divergent types and views on graffiti - whether that be a form of personal expression, an act of vandalism, or something else entirely - and investigated its association to counterculture and rapid recognition in the public eye. As a result of my research, I submitted this augmented reality tool as a component of my artefact to develop a graffiti-inspired rendition of my name and overlay the outcome over a predetermined marker with the use of [AR.js](https://github.com/AR-js-org/AR.js/) and [A-Frame](https://aframe.io/). Since submitting the project, I have further developed its functionality and customisation features beyond a graffiti-specific tool to support dynamic font loading, enabling a more desired or custom font to be used in place of a fixed one.

The philosophy behind this concept was to explore how the inclusion of digital media could influence graffiti. There was a clear stigma against the activity highlighted within my primary and secondary research, and by developing a digital alternative, I aimed to address these negative perceptions directly by offering a solution that causes no permanent damage and carries no legal risk, while also remaining respectful to the original practice. The use of a digital tool also enables a wider audience to participate, as financial and social barriers typically associated with traditional graffiti are significantly reduced.

## Usage

This text rendering tool requires three components:
- Text input
- Uploaded .otf or .ttf file
- Marker

The default marker is from the [artoolkit Barcode Marker Collection](https://github.com/nicolocarpignoli/artoolkit-barcode-markers-collection/blob/master/4x4_bch_13_5_5/0.png) and can be substituted with an image, pattern, or another similar monotone marker. Due to camera resolution constraints inherent in the AR.js dependency, I highly recommend opting for an image with solid colours with no text. This reduces the risk of the software struggling to recognise the image and allows the camera to be positioned further away from the marker.  

A solid-fill font is also recommended, as it makes fully obscuring the marker beneath the rendered text easier, and produces higher-quality result overall.
