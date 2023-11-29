import { ExitIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import dados from '@/utils/dados.json'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Settings, User } from 'lucide-react'

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 border border-secondary">
            <AvatarImage
              src={dados.user.picture}
              alt={'@' + dados.user.username}
            />
            <AvatarFallback>CSI</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-row space-x-4 space-y-1">
            <Avatar className="h-8 w-8 border border-secondary">
              <AvatarImage
                src={dados.user.picture}
                alt={'@' + dados.user.username}
              />
              <AvatarFallback>CSI</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium leading-none">
                {dados.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {dados.user.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer">
          <User className="mr-2 h-4 w-4" /> Meu perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer">
          <Settings className="mr-2 h-4 w-4" /> Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 hover:cursor-pointer hover:text-red-400">
          <ExitIcon className="mr-2 h-4 w-4" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
