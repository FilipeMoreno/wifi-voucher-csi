'use client'

import { Code2, Ellipsis } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CollapseMenuButton } from '@/components/admin-panel/collapse-menu-button'
import { Button } from '@/components/ui/button'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { config } from '@/config'
import { getPages } from '@/lib/pages'
import { cn } from '@/lib/utils'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import ChangelogComponent from '../Changelog'

interface MenuProps {
	isOpen: boolean | undefined
}

export function Menu({ isOpen }: MenuProps) {
	const pathname = usePathname()
	const pages = getPages(pathname)

	return (
		<ScrollArea className="[&>div>div[style]]:!block">
			<nav className="mt-8 h-full w-full">
				<ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
					{pages.map(({ groupLabel, menus, icon: Icon }, index) => (
						<li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
							{(isOpen && groupLabel) || isOpen === undefined ? (
								<p className="text-[10px] font-extrabold text-muted-foreground px-4 pb-2 max-w-[248px] truncate uppercase flex items-center">
									<Icon className="mr-2" size={14} />
									{groupLabel}
								</p>
							) : !isOpen && isOpen !== undefined && groupLabel ? (
								<TooltipProvider>
									<Tooltip delayDuration={100}>
										<TooltipTrigger className="w-full">
											<div className="w-full flex justify-center items-center">
												<Ellipsis className="h-5 w-5" />
											</div>
										</TooltipTrigger>
										<TooltipContent side="right">
											<p>{groupLabel}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							) : (
								<p className="pb-2"></p>
							)}
							{menus.map(
								({ href, label, icon: Icon, active, submenus }, index) =>
									submenus.length === 0 ? (
										<div className="w-full" key={index}>
											<TooltipProvider disableHoverableContent>
												<Tooltip delayDuration={100}>
													<TooltipTrigger asChild>
														<Button
															variant={active ? 'secondary' : 'ghost'}
															className="w-full justify-start h-10 mb-1"
															asChild
														>
															<Link href={href}>
																<span
																	className={cn(isOpen === false ? '' : 'mr-4')}
																>
																	<Icon size={18} />
																</span>
																<p
																	className={cn(
																		'max-w-[200px] truncate',
																		isOpen === false
																			? '-translate-x-96 opacity-0'
																			: 'translate-x-0 opacity-100',
																	)}
																>
																	{label}
																</p>
															</Link>
														</Button>
													</TooltipTrigger>
													{isOpen === false && (
														<TooltipContent side="right">
															{label}
														</TooltipContent>
													)}
												</Tooltip>
											</TooltipProvider>
										</div>
									) : (
										<div className="w-full" key={index}>
											<CollapseMenuButton
												icon={Icon}
												label={label}
												active={active}
												submenus={submenus}
												isOpen={isOpen}
											/>
										</div>
									),
							)}
						</li>
					))}
				</ul>
				<div className="bottom-0 left-0 right-0 flex flex-col items-center justify-center">
					<Image
						alt="Logo"
						width={20}
						height={20}
						src={'/icons/icon-512x512.png'}
						className="mb-1"
					/>
					<ChangelogComponent />
					<span className="text-xs text-zinc-500">v{config.version}</span>
				</div>
				<div className="mt-4 flex flex-row items-center justify-center text-xs">
					<Code2 className="mr-1 h-4 w-4 text-zinc-500" />
					<span className="text-zinc-500">Developed with</span>
					<HeartFilledIcon className="mx-1 h-4 w-4 text-tertiary" />
					<span className="text-zinc-500">
						by{' '}
						<Link
							className="hover:text-tertiary"
							href="https://filipemoreno.com.br"
						>
							Filipe Moreno
						</Link>
					</span>
				</div>
			</nav>
		</ScrollArea>
	)
}
