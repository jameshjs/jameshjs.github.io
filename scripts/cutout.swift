// Lifts the person out of a photo using Apple Vision and writes a transparent PNG.
// Usage: swift scripts/cutout.swift <input> <output.png>
import Foundation
import Vision
import CoreImage
import CoreImage.CIFilterBuiltins

let args = CommandLine.arguments
guard args.count == 3 else { print("usage: cutout <in> <out.png>"); exit(1) }
let input = CIImage(contentsOf: URL(fileURLWithPath: args[1]), options: [.applyOrientationProperty: true])!
let handler = VNImageRequestHandler(ciImage: input)

let req = VNGeneratePersonSegmentationRequest()
req.qualityLevel = .accurate
try handler.perform([req])
guard let obs = req.results?.first else { print("no person"); exit(2) }
let raw = CIImage(cvPixelBuffer: obs.pixelBuffer)
let mask = raw.transformed(by: CGAffineTransform(scaleX: input.extent.width / raw.extent.width,
                                                 y: input.extent.height / raw.extent.height))

let blend = CIFilter.blendWithMask()
blend.inputImage = input
blend.backgroundImage = CIImage.empty()
blend.maskImage = mask
let out = blend.outputImage!.cropped(to: input.extent)
let ctx = CIContext()
try ctx.writePNGRepresentation(of: out, to: URL(fileURLWithPath: args[2]), format: .RGBA8,
                               colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
print("wrote \(args[2])")
