export type ItemType = "dir" | "file"
export type FileExtension = "jpg" | "png" | "gif" | "txt" | "pdf" | "docx" | "xlsx" | "mp4" | "mp3"

export interface RawItem {
  id: number
  type: ItemType
  parentId: number | null
  name: string
  isFavorite: boolean
}

export class Item {
  id: number
  type: ItemType
  parentId: number | null
  name: string
  isFavorite: boolean
  extension: FileExtension | null
  children: Item[] = []

  constructor(data: RawItem) {
    this.id = data.id
    this.type = data.type
    this.parentId = data.parentId
    this.name = data.name
    this.isFavorite = data.isFavorite
    this.extension = this.getExtension()
  }

  private getExtension(): FileExtension | null {
    if (this.type === "file") {
      const ext = this.name.split(".").pop()?.toLowerCase()
      const knownExt = ["jpg", "png", "gif", "txt", "pdf", "docx", "xlsx", "mp4", "mp3"]
      return knownExt.includes(ext ?? "") ? (ext as FileExtension) : null
    }
    return null
  }

  isImage(): boolean {
    return this.extension === "jpg" || this.extension === "gif"
  }
}

export function isItem(obj: unknown): obj is Item {
  return obj instanceof Item
}
