type IconNodeElement = 'circle' | 'ellipse' | 'line' | 'path' | 'polygon' | 'polyline' | 'rect'

export type IconNodeChild = [elementName: IconNodeElement, attrs: Record<string, string>]

export type IconNode = IconNodeChild[]
