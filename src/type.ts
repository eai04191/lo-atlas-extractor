export interface MSprite {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    borderLeft: number;
    borderRight: number;
    borderTop: number;
    borderBottom: number;
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
}

export interface UIAtlas {
    m_Enabled: number;
    m_Name: string;
    mSprites: MSprite[];
    mPixelSize: number;
    mCoordinates: number;
    sprites: any[];
}
